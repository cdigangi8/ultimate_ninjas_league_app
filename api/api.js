import axios from 'axios';
import { maxHeaderSize } from 'http';

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
        axios.get(`/api/get_comp_info`, {
            params: {
                location: location
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function getAthletes(location, max, min){
    const p = new Promise((res,reject)=>{
        axios.get(`/api/get_athletes`, {
            params: {
                location: location,
                ageMax: max,
                ageMin: min
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

export function postUpdatedScorecard(athlete, course, points, tieOB, tieTime, resStr){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/post_updated_scorecard`, {
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
                rank: points
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function updateStandings(athlete, total){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/update_season_standings`, {
            params: {
                athlete_id: athlete.athlete_id,
                total_athletes: total
            }
        }).then(resp=>{
            res(resp);
        }).catch(err=>reject(err)); 
    })
    return p;
}

export function postUpdatedRankings(obj){
    const p = new Promise((res,reject)=>{
        axios.post(`/api/update_season_rankings`, {
            params: {
                athlete_id: obj.ath,
                ranking: obj.rank
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