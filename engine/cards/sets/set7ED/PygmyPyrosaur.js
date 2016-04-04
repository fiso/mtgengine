"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PygmyPyrosaurBase = require("../setDDI/PygmyPyrosaur.js");

class PygmyPyrosaur extends PygmyPyrosaurBase {
  constructor(game) {
    super(game, "Pygmy Pyrosaur", "Seventh Edition", "7ED");
  }
}

module.exports = PygmyPyrosaur;
