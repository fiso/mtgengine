"use strict";
const Constants = require ("../../../Constants");
const PygmyPyrosaurBase = require("../setDDI/PygmyPyrosaur");

class PygmyPyrosaur extends PygmyPyrosaurBase {
  constructor(game) {
    super(game, "Pygmy Pyrosaur", "Seventh Edition", "7ED");
  }
}

module.exports = PygmyPyrosaur;
