import axios from 'axios';

export function addCompetitor(firstName, lastName, age, location, gender){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/add_competitor`, {
            // axios.post(`http://localhost:5000/api/complete_profile`, {
            params: {
                firstName: firstName,
                lastName: lastName,
                age: age,
                location: location,
                gender: gender
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function getCompInfo(location){
    const p = new Promise((res,reject)=>{
        axios.get(`/api/get_athletes`, {
            params: {
                location: location
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function getCourseObstacles(id){
    const p = new Promise((res,reject)=>{
        axios.get(`/api/get_obstacles`, {
            params: {
                course: id
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function postScorecard(athlete, course, points, tieOB, tieTime, resStr){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/post_scorecard`, {
            params: {
                athlete: athlete,
                course: course,
                points: points,
                tieOB: tieOB,
                tieTime: tieTime,
                resStr: resStr
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function postStandings(athlete, course, points){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/post_standings`, {
            params: {
                // array: arr,
                athlete_id: athlete.athlete_id,
                course: course,
                points: points
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function getStandings(ageMin, ageMax, location){
    const p = new Promise((res,reject)=>{
        axios.get(`/api/get_standings`, {
            params: {
                ageMin: ageMin,
                ageMax: ageMax,
                location: location
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}