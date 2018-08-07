"use strict";
const Constants = require ("../../../Constants");
const EntourageofTrestBase = require("../setPZ2/EntourageofTrest");

class EntourageofTrest extends EntourageofTrestBase {
  constructor (game) {
    super(game, "Entourage of Trest", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = EntourageofTrest;
