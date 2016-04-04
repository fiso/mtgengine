"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OnuletBase = require("../setATQ/Onulet.js");

class Onulet extends OnuletBase {
  constructor(game) {
    super(game, "Onulet", "Fourth Edition", "4ED");
  }
}

module.exports = Onulet;
