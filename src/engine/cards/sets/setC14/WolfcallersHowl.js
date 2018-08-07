"use strict";
const Constants = require ("../../../Constants");
const WolfcallersHowlBase = require("../setCMA/WolfcallersHowl");

class WolfcallersHowl extends WolfcallersHowlBase {
  constructor (game) {
    super(game, "Wolfcaller's Howl", "Commander 2014", "C14");
  }
}

module.exports = WolfcallersHowl;
