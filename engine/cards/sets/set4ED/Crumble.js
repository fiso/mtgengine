"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrumbleBase = require("../setATQ/Crumble.js");

class Crumble extends CrumbleBase {
  constructor(game) {
    super(game, "Crumble", "Fourth Edition", "4ED");
  }
}

module.exports = Crumble;
