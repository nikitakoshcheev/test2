export  const withLoggerCard = Card =>{
    return{
        functional:true,
        name:"withLoggerCard",
        render(h,context){
            return h(
                Card,
                {
                    ...context.data,
                    nativeOn:{
                        click:() => {
                            this.$router.push('/about2')
                        }
                    }
                },
                context.children
            );
        }
    };
}