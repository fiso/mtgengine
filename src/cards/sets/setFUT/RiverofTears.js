"use strict";
const Constants = require ("../../../Constants");
const RiverofTearsBase = require("../setIMA/RiverofTears");

class RiverofTears extends RiverofTearsBase {
  constructor (game) {
    super(game, "River of Tears", "Future Sight", "FUT");
  }
}

module.exports = RiverofTears;
