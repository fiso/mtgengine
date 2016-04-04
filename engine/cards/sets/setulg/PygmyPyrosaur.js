"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PygmyPyrosaurBase = require("../setDDI/PygmyPyrosaur.js");

class PygmyPyrosaur extends PygmyPyrosaurBase {
  constructor(game) {
    super(game, "Pygmy Pyrosaur", "Urza's Legacy", "ULG");
  }
}

module.exports = PygmyPyrosaur;
