"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RainofTearsBase = require("../setMMQ/RainofTears.js");

class RainofTears extends RainofTearsBase {
  constructor(game) {
    super(game, "Rain of Tears", "Tenth Edition", "10E");
  }
}

module.exports = RainofTears;
