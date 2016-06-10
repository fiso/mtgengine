"use strict";
const Constants = require ("../../../Constants");
const AnarchistBase = require("../setEXO/Anarchist");

class Anarchist extends AnarchistBase {
  constructor (game) {
    super(game, "Anarchist", "Ninth Edition", "9ED");
  }
}

module.exports = Anarchist;
