/**
 * Write your challenge solution here
 */
function clock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(minutes);
    

    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;

    const timeDigit = now.toLocaleTimeString('en-US', { hour12: true });
    document.querySelector('.digital-clock').textContent = timeDigit;
}
clock();
setInterval(clock, 1000);