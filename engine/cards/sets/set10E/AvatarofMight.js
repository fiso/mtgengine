"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvatarofMightBase = require("../setPCY/AvatarofMight.js");

class AvatarofMight extends AvatarofMightBase {
  constructor(game) {
    super(game, "Avatar of Might", "Tenth Edition", "10E");
  }
}

module.exports = AvatarofMight;
