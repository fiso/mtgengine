"use strict";
const Constants = require ("../../../Constants");
const AladdinsLampBase = require("../set4ED/AladdinsLamp");

class AladdinsLamp extends AladdinsLampBase {
  constructor (game) {
    super(game, "Aladdin's Lamp", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = AladdinsLamp;
