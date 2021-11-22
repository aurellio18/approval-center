<template>
    <div class="main">
        <div class="head">
            <h1>B 1234 PHI</h1>
            <p>Selasa, 06 Nov 2021</p>
            <div class="border"></div>
        </div>
    </div>
    <div class="content">
        <h1>Pilih perjalanan anda</h1>
        <div class="card">
            <div class="sub-card" id="card1">
                <div class="content">
                <h1 class="headline name">John Louis</h1>
                <h1 class="headline time">08:00</h1>
                <img src="../assets/card/ic-pickup-point.svg" alt="" class="pickup">
                <img src="../assets/card/ic-trip.svg" alt="" class="trip">
                <img src="../assets/card/ic-detination.svg" alt="" class="dest">
                <p class="place" id="pick">Graha Elnusa</p>
                <p class="place" id="dest">Wisma Mulia</p>
                <p class="desc" id="pickdesc">Pickup Point</p>
                <p class="desc" id="destdesc">Destination</p>
                </div>
            </div>
        </div>
        <button @click.prevent="onInputClick()">Check Out</button>
    </div>
</template>

<script>
export default {
    name: 'checkout',
    methods: {
      onInputClick() {
          this.$router.push('/confirmout');
      },
    },
}
</script>

<style scoped>
.main{
    position: absolute;
    top: 0;
    left: 0;
    width: 360px;
    height: 800px;
}

.head{
    margin-top: 40px;
    margin-left: 16px;
}
.head h1{
    position: static;
    width: 125px;
    height: 28px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #146BB8;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
}
.head p{
    position: static;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #6A6A6A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
}
.head .border{
    position: static;
    width: 328px;
    height: 0px;
    left: 0px;
    top: 79px;
    border: 1px dashed #8BC4F9;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 24px 0px;
}

.content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 328px;
    height: 503px;
    left: 16px;
    top: 119px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.content h1{
    position: static;
    width: 181px;
    height: 21px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #146BB8;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;
}

.card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 328px;
    height: 458px;
    left: 0px;
    top: 45px;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.sub-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: #FFFFFF;
    border: 1.5px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    flex-grow: 0;
    margin: 8px 0px;  
    position: static;
    width: 328px;
    height: 142px;
    left: 0px;
}
#card1{
    top: 0px;
}

.card .sub-card .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 296px;
    height: 110px;
    left: 16px;
    top: 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
}

.card .sub-card .content .headline{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #171717;
    opacity: 0.8;
    flex: none;
    flex-grow: 0;
    margin: 0px 0px;
}
.card .sub-card .content .name {
    position: absolute;
    top: 90px;
    left: 16px;
    order: 0;
    width: 148px;
    height: 18px;
    text-align: left;
}
.card .sub-card .content .time {
    position: absolute;
    left: auto;
    right: 16px;
    top: 90px;
    text-align: right;  
    order: 1;
    width: 148px;
    height: 18px;
}

.card .sub-card .content .pickup{
    position: absolute;
    width: 20px;
    left: 16px;
    top: 128px;
    bottom: 66.67%;
}

.card .sub-card .content .trip{
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px/2);
    top: 128px;
    background: #77BAF8;
    border-radius: 100px;
}

.card .sub-card .content .dest{
    position: absolute;
    width: 20px;
    right: 16px;
    top: 128px;
    bottom: 66.67%;
}

.card .sub-card .content .place{
    position: absolute;
    width: 140px;
    height: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #171717;
    opacity: 0.8;
}

.card .sub-card .content #pick{
    left: 16px;
    top: 148px;
    text-align: left;
}
.card .sub-card .content #dest{
    right: 16px;
    top: 148px;
    text-align: right;
}

.card .sub-card .content .desc{
    position: absolute;
    width: 140px;
    height: 16px;
    top: 168px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #747474;
    opacity: 0.8;
}

.card .sub-card .content #pickdesc{
    left: 16px;
    text-align: left;
}

.card .sub-card .content #destdesc{
    right: 16px;
    text-align: right;
}

button{
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px 16px;
    background: #D92534;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: absolute;
    top: 600px;
}

</style>