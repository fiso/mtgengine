"use strict";
const Constants = require ("../../../Constants");
const PygmyPyrosaurBase = require("../setDDI/PygmyPyrosaur");

class PygmyPyrosaur extends PygmyPyrosaurBase {
  constructor(game) {
    super(game, "Pygmy Pyrosaur", "Urza's Legacy", "ULG");
  }
}

module.exports = PygmyPyrosaur;
