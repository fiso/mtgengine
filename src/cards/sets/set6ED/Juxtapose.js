"use strict";
const Constants = require ("../../../Constants");
const JuxtaposeBase = require("../setMED/Juxtapose");

class Juxtapose extends JuxtaposeBase {
  constructor (game) {
    super(game, "Juxtapose", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Juxtapose;
