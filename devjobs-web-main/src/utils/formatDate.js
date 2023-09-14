
const formatDate = (postedAt) => {
    const postedDate = new Date(postedAt);
    const currDate = new Date();
    const hr = 60*60*1000;
    const hoursPassed = Math.round((currDate.getTime() - postedDate.getTime()) / hr);
    const daysPassed = hoursPassed / 24;
    if(hoursPassed < 23)
        return `${hoursPassed}h ago`;
    else
        return `${Math.round(daysPassed)} Days ago`;
}

export default formatDate;