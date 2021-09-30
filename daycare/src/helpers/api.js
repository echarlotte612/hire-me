import axios from 'axios';

export const accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';
export const groupId = '11fc220c-ebba-4e55-9346-cd1eed714620';
export const institutionId = 'fb6c8114-387e-4051-8cf7-4e388a77b673';

// POST check-IN to API //
export const checkIn = async (setIsCheckedIn, id, time) => {
    await axios.post(`https://tryfamly.co/api/v2/children/${id}/checkins`, { accessToken: accessToken, pickupTime: time })
        .then(response => {
            if (response.status === 200) {
                setIsCheckedIn(true)
                let result = response.data
                return result
            }
            else {
                console.error("Couldn't check in child")
            }
        })
        .catch(err => {
            console.error(err.response.data.error)
            alert(`Couldn't check in child: \n${err.response.data.error}`)
            setIsCheckedIn(false)
        })
}

// POST check-OUT to API //
export const checkOut = async (setIsCheckedIn, id) => {
    await axios.post(`https://tryfamly.co/api/v2/children/${id}/checkout`, { accessToken: accessToken })
        .then(response => {
            if (response.status === 200) {
                setIsCheckedIn(false)
                let result = response.data
                return result
            }
            else {
                console.error("Couldn't check out child")
            }
        })
        .catch(err => {
            console.error(err.response.data.error)
            alert(`Couldn't check out child: \n${err.response.data.error}`)
            setIsCheckedIn(true)
        })
}