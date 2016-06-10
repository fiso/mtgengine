"use strict";
const Constants = require ("../../../Constants");
const JuxtaposeBase = require("../setCHR/Juxtapose");

class Juxtapose extends JuxtaposeBase {
  constructor (game) {
    super(game, "Juxtapose", "Legends", "LEG");
  }
}

module.exports = Juxtapose;
