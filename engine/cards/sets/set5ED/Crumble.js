"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrumbleBase = require("../setATQ/Crumble.js");

class Crumble extends CrumbleBase {
  constructor(game) {
    super(game, "Crumble", "Fifth Edition", "5ED");
  }
}

module.exports = Crumble;
