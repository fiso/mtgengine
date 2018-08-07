"use strict";
const Constants = require ("../../../Constants");
const SkybreenBase = require("../setPCA/Skybreen");

class Skybreen extends SkybreenBase {
  constructor (game) {
    super(game, "Skybreen", "Planechase", "HOP");
  }
}

module.exports = Skybreen;
