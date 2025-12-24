<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useForm, Field as VeeField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import FieldGroup from '@/components/ui/field/FieldGroup.vue'
import Field from '@/components/ui/field/Field.vue'
import FieldLabel from '@/components/ui/field/FieldLabel.vue'
import FieldError from '@/components/ui/field/FieldError.vue'
import ButtonSubmit from '@/components/ButtonSubmit.vue'
import { useAuthStore } from '@/stores/auth/AuthStore'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

const authStore = useAuthStore()
const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email('Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
  }),
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: '',
    password: '',
  },
})

const onSubmit = handleSubmit(async (data) => {
  try {
    await authStore.login(data)

    resetForm({
      values: {
        email: '',
        password: '',
      },
    })

    await router.push('/admin')

    toast('Login successful')
  } catch (error) {
    toast(error.response.data.message ?? 'Login failed')
  }
})
</script>

<template>
  <div class="grid place-items-center h-screen">
    <Card class="mx-auto max-w-sm w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Login </CardTitle>
        <CardDescription> Enter your email below to login to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <form v-on:submit="onSubmit">
          <div class="grid gap-4">
            <FieldGroup>
              <VeeField v-slot="{ field, errors }" name="email">
                <Field :data-invalid="!!errors.length">
                  <FieldLabel for="email">Email</FieldLabel>
                  <Input id="email" type="email" v-bind="field" :aria-invalid="!!errors.length" />
                  <FieldError v-if="errors.length" :errors="errors" />
                </Field>
              </VeeField>
            </FieldGroup>
            <FieldGroup>
              <VeeField v-slot="{ field, errors }" name="password">
                <Field :data-invalid="!!errors.length">
                  <div class="flex items-center">
                    <FieldLabel for="password">Password</FieldLabel>
                    <router-link
                      to="/forgot-password"
                      class="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </router-link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    v-bind="field"
                    :aria-invalid="!!errors.length"
                  />
                  <FieldError v-if="errors.length" :errors="errors" />
                </Field>
              </VeeField>
            </FieldGroup>
            <ButtonSubmit :is-loading="authStore.processing" label="Login" />
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
