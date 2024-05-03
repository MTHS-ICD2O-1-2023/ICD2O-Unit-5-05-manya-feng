// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
  const lengthA = parseFloat(lengthA)
  const lengthB = parseFloat(lengthB)
  const lengthC = parseFloat(lengthC)

  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  console.log(angleA)
  console.log(angleB)
  console.log(angleC)
  console.log(sumOfAngles)
  }
  