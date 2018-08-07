"use strict";
const Constants = require ("../../../Constants");
const OathofLilianaBase = require("../setEMN/OathofLiliana");

class OathofLiliana extends OathofLilianaBase {
  constructor (game) {
    super(game, "Oath of Liliana", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = OathofLiliana;
