"use strict";
const Constants = require ("../../../Constants");
const SilasRennSeekerAdeptBase = require("../setPZ2/SilasRennSeekerAdept");

class SilasRennSeekerAdept extends SilasRennSeekerAdeptBase {
  constructor (game) {
    super(game, "Silas Renn, Seeker Adept", "Commander 2016", "C16");
  }
}

module.exports = SilasRennSeekerAdept;
