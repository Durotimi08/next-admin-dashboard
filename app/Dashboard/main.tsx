"use client";
import { useState } from "react";
import Image from "next/image"
import Chart from "react-apexcharts";
import rocket from "../rocket-white.png"
import man from "../bruce-mars.jpg"
const Main = () => {
  const[chart1, setchart1] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["jan", "feb", "mar", "apr"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
      }
    },
    series: [{
      type: 'line',
      data: [19, 33, 28, 59]
    }, {
      type: 'line',
      data: [59, 40, 52, 21],
    }]
  })
  const[chart2, setchart2] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        },
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        show: false,
        padding: {
          left: -5,
          right: -5,
          bottom: -30
        } 
      }
    },
    series: [{
      type: 'area',
      data: [50, 37, 43, 59, 45, 40]
    }]
  })
  return (
    <>
      <main className="w-full navv p-6 pb-10 overflow-y-auto">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-xl">Dashboard</span>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="stats shadow w-full my-8 bg-base-200">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              </div>
              <div className="stat-title">Annual Revenue</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div className="stat-title">Total users</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="w-16 rounded-full">
                  <div className="radial-progress text-primary" style={{"--value": 86}}>86%</div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
            
          </div>
        </div>
        <div className="flex gap-7 w-full">
          <div className="main-dash flex h-fit">
            <div className="chart-dash p-4 bg-base-200 rounded-lg h-fit">
              <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="line"
                />
            </div>
            <div className="w-60 bg-base-200 rounded-lg flex flex-col relative h-auto p-2">
              <div className="absolute top-2/4 left-2 -translate-x-full -translate-y-1/2 bg-base-200 w-7 h-40 rounded-3xl"></div> 
              <div className="w-full text-xl font-medium flex justify-center align-middle py-2 cursor-pointer bg-base-100 rounded-md">Sales analysis</div>
              <div className="w-full mt-6 bg-base-100 rounded-md flex flex-col gap-3 overflow-auto flowe">
                <div className="alert alert-success p-2 rounded-md">
                  <span className="text-sm w-full">Jan: Sales increased by 20%</span>
                </div>
                <div className="alert alert-error p-2 rounded-md">
                  <span className="text-sm w-full">Feb: Sales decreased by 40%</span>
                </div>
                <div className="alert alert-success p-2 rounded-md">
                  <span className="text-sm w-full">Jan: Sales increased by 4h4%</span>
                </div>
                <div className="alert alert-error p-2 rounded-md">
                  <span className="text-sm w-full">Feb: Sales decreased by 40%</span>
                </div>
                <div className="alert alert-success p-2 rounded-md">
                  <span className="text-sm w-full">Jan: Sales increased by 0%</span>
                </div>
                <div className="alert alert-error p-2 rounded-md">
                  <span className="text-sm w-full">Feb: Sales decreased by 10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 w-full side-main">
            <div className="w-full h-fit bg-base-200 rounded-lg flex flex-col mb-6">
              <div className="w-full h-fit flex gap-7 flex-wrap p-6 pt-9">
                <div className="w-24 h-24 rounded-md bg-base-100 relative  place-content-center grid">
                  <div className="absolute -top-4 -left-2 w-28 bg-primary py-2 rounded-lg">
                    <div className="flex align-middle justify-center">
                      <span className="text-md font-bold h-fit">Active users</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-secondary">1M</div>
                </div>
                <div className="w-24 h-24 rounded-md bg-base-100 relative  place-content-center grid">
                  <div className="absolute -top-4 -left-2 w-28 bg-primary py-2 rounded-lg">
                    <div className="flex align-middle justify-center">
                      <span className="text-md font-bold">Employees</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-secondary">50K</div>
                </div>
                <div className="w-24 h-24 rounded-md bg-base-100 relative  place-content-center grid">
                  <div className="absolute -top-4 -left-2 w-28 bg-primary py-2 rounded-lg">
                    <div className="flex align-middle justify-center">
                      <span className="text-md font-bold">Remote</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-secondary">40K</div>
                </div>
                <div className="w-24 h-24 rounded-md bg-base-100 relative  place-content-center grid">
                  <div className="absolute -top-4 -left-2 w-28 bg-primary py-2 rounded-lg">
                    <div className="flex align-middle justify-center">
                      <span className="text-md font-bold">On-site</span>
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-secondary">10K</div>
                </div>
              </div>
              <div className="text-xl font-medium ml-6 mt-6">Active users trend</div>
              <div className="w-full  relative">
                <div className="w-full absolute bottom-0 left-0 bg-blue-700 h-5 rounded-br-md rounded-bl-md"></div>
                <Chart
                    options={chart2.options}
                    series={chart2.series}
                    type="line"
                />
              </div>
            </div>
            <div className="w-full h-30 bg-base-200 rounded-md p-4 flex align-middle">
              <div className="w-full flex flex-col">
                <div className="text-sm font-bold">Next project launch</div>
                <div className="text-sm">New app features</div> 
                <div className="text-sm font-semibold text-primary mt-3">90 days</div>
                <div className="text-sm font-bold">10th october, 2023</div>
              </div>
              <Image 
                src={rocket}
                alt="rocket"
                className="h-24 w-auto"
              />
            </div>
            <div className="w-full h-fit bg-base-200 p-3 flex flex-col gap-6 rounded-md">
              <div className="mt-3">
                <div className="text-md font-semibold">Ongoing projects</div>
                <div className="text-sm">Projects still in development</div> 
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-18 bg-base-100 rounded-md p-3 flex flex-col">
                  <div className="w-full flex">
                    <div className="avater-group -space-x-2 flex">
                      <div className="avater">
                        <Image src={man} alt="picture" className="w-7 rounded-full h-7 "/>
                      </div>
                      <div className="avater">
                        <Image src={man} alt="picture" className="w-7 rounded-full h-7 "/>
                      </div>
                      <div className="avater">
                        <Image src={man} alt="picture" className="w-7 rounded-full h-7 "/>
                      </div>
                      <div className="avater placeholder">
                        <div className="w-7 h-7 rounded-full bg-neutral-focus text-neutral-content">
                          <span className="text-sm">
                            +10 
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm ml-auto">Design Team</div>
                  </div>
                  <div className="flex w-full mt-3">
                    <div className="flex flex-col">
                      <div className="text-sm text-primary">11 august, 2023</div>
                      <div className="text-sm">App redesign</div>
                    </div>
                    <div className="ml-auto text-md text-primary font-semibold">6/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 mt-4 footer footer-center p-4 bg-base-200 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by Durotimi</p>
          </aside>
        </footer>
      </main>
    </>
  );
};

export default Main;
