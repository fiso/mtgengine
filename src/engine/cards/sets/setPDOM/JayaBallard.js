"use strict";
const Constants = require ("../../../Constants");
const JayaBallardBase = require("../setDOM/JayaBallard");

class JayaBallard extends JayaBallardBase {
  constructor (game) {
    super(game, "Jaya Ballard", "Dominaria Promos", "PDOM");
  }
}

module.exports = JayaBallard;
