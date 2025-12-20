<script setup>
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid place-items-center h-screen">
    <Card class="mx-auto max-w-sm w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Forgot Password </CardTitle>
        <CardDescription> Enter your email below to reset your password </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <Button type="submit" class="w-full"> Reset Password </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <router-link to="/login" class="underline"> Login </router-link>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
