"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CripplingChillBase = require("../setAVR/CripplingChill.js");

class CripplingChill extends CripplingChillBase {
  constructor(game) {
    super(game, "Crippling Chill", "Khans of Tarkir", "KTK");
  }
}

module.exports = CripplingChill;
