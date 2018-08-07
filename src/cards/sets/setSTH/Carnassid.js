"use strict";
const Constants = require ("../../../Constants");
const CarnassidBase = require("../setTPR/Carnassid");

class Carnassid extends CarnassidBase {
  constructor (game) {
    super(game, "Carnassid", "Stronghold", "STH");
  }
}

module.exports = Carnassid;
