"use strict";
const Constants = require ("../../../Constants");
const CrumbleBase = require("../setATQ/Crumble");

class Crumble extends CrumbleBase {
  constructor (game) {
    super(game, "Crumble", "Fifth Edition", "5ED");
  }
}

module.exports = Crumble;
