"use strict";
const Constants = require ("../../../Constants");
const JaliraMasterPolymorphistBase = require("../setA25/JaliraMasterPolymorphist");

class JaliraMasterPolymorphist extends JaliraMasterPolymorphistBase {
  constructor (game) {
    super(game, "Jalira, Master Polymorphist", "Magic 2015", "M15");
  }
}

module.exports = JaliraMasterPolymorphist;
