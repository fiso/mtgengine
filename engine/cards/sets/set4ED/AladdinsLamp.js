"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AladdinsLampBase = require("../setARN/AladdinsLamp.js");

class AladdinsLamp extends AladdinsLampBase {
  constructor(game) {
    super(game, "Aladdin's Lamp", "Fourth Edition", "4ED");
  }
}

module.exports = AladdinsLamp;
