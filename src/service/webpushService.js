// import axios from "axios";
// const token = 1;
// const mock = {
//   endpoint:
//     "https://fcm.googleapis.com/fcm/send/cgHrM3Vzc3Q:APA91bHikUZGWv1Y6smgJqxavEC-vZ821ieiHYIdJ7IzZI13fgqjkozGmutMEmsIlVjpkQjVV2pi27ggM4GPArGrS8G2-2Ojfe_ixmfdMhkL3ayATmrerjCL5fTp-DG6VLV3Xn_1z2qg",
//   expirationTime: null,
//   keys: {
//     p256dh:
//       "BJ5oytOplDy4GuqApIBh_nJPLwal8qQHGV0Als_ReJ0QCiC7gFdI3cO0sNxlFYEmpAKfTcnc9pM9cHF9qRBKi74",
//     auth: "I3YlzyC_EUgO9Z-py7nvsw",
//   },
// };
// export const pushService = () => {
//   const res = axios.post(`localhost:8081/api/subscriptions`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: {
//       endpont: `${mock.endpoint}`,
//       expirationTime: `${mock.expirationTime}`,
//       keys: `${mock.keys.p256dh}`,
//       auth: `${mock.keys.auth}`,
//     },
//   });
//   const data = res.data;
//   return data;
// };

// export const pushDeleteService = () => {
//   const id = 1;
//   const res = axios.DELETE(`localhost:8081/api/subscriptions/?id=${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = res.data;
//   return data;
// };
