<template>
    <div class="w-full mx-auto p-6 bg-[#F2F2F2] min-h-screen">
        <h1 class="text-5xl font-semibold mb-6 text-center">
            Welcome to your Profile
        </h1>
        <div class="text-lg text-gray-800 text-center flex flex-col items-center space-y-6">
            <h2 class="text-2xl font-semibold mb-6 text-center">Manage your details, password and subscription here.</h2>
            <div class="details w-[40%] mx-auto mb-16 bg-white rounded-2xl p-8 shadow-2xl">


              
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Fullname</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <p>{{ form.fullName }}</p>
                    </div>
                </div>
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Email</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <p>{{ form.email }}</p>
                    </div>
                </div>
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Phone number</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <p>{{ form.phoneNumber }}</p>
                    </div>
                </div>
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Country</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <p>{{ form.countryOfResidence }}</p>
                    </div>
                </div>
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Password</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <a class="hover-underline" href="#" style="color: #103452; font-weight: 600; font-size: 16px; margin-bottom: 5px; display: block;">Change password</a>
                    </div>
                </div>
                <div class="flex justify-between space-x-8">
                    <div class="col-md-3 body-left-space">
                        <p style="color: #5f5f5f; font-size: 16px; margin-bottom: 5px;">Your plan</p>
                    </div>
                    <div class="col-md-9 body-left-space">
                        <NuxtLink to="/bootcamps/upgrade" class="text-[#103452]">
                            Free trial - Upgrade now
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </div>  
    </div>
</template>
<script setup>
    import localforage from 'localforage';
    const form = reactive({
        fullName: '',
        email: '',
        countryOfResidence: '',
        phoneNumber: '',
    })
    onMounted(async () => {
        try {
            const userData = await localforage.getItem('user')
            const courseData = await localforage.getItem('courseRegForm')
            if (userData) {
                form.fullName = userData.fullName
                form.email = userData.email
                form.phoneNumber = courseData.body.phoneNumber
                form.countryOfResidence = courseData.body.countryOfResidence
            }
        } catch (error) {
            console.error('Profile user data error', error)
        }
    })
</script>