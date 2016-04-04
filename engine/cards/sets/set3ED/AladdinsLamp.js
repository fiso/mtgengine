"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AladdinsLampBase = require("../setARN/AladdinsLamp.js");

class AladdinsLamp extends AladdinsLampBase {
  constructor(game) {
    super(game, "Aladdin's Lamp", "Revised Edition", "3ED");
  }
}

module.exports = AladdinsLamp;
