"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HonorofthePureBase = require("../setM10/HonorofthePure.js");

class HonorofthePure extends HonorofthePureBase {
  constructor(game) {
    super(game, "Honor of the Pure", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = HonorofthePure;
