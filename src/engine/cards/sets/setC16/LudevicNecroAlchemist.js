"use strict";
const Constants = require ("../../../Constants");
const LudevicNecroAlchemistBase = require("../setPZ2/LudevicNecroAlchemist");

class LudevicNecroAlchemist extends LudevicNecroAlchemistBase {
  constructor (game) {
    super(game, "Ludevic, Necro-Alchemist", "Commander 2016", "C16");
  }
}

module.exports = LudevicNecroAlchemist;
