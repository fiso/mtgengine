"use strict";
const Constants = require ("../../../Constants");
const CripplingChillBase = require("../setAVR/CripplingChill");

class CripplingChill extends CripplingChillBase {
  constructor (game) {
    super(game, "Crippling Chill", "Khans of Tarkir", "KTK");
  }
}

module.exports = CripplingChill;
