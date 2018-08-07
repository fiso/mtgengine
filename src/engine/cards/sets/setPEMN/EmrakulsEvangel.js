"use strict";
const Constants = require ("../../../Constants");
const EmrakulsEvangelBase = require("../setEMN/EmrakulsEvangel");

class EmrakulsEvangel extends EmrakulsEvangelBase {
  constructor (game) {
    super(game, "Emrakul's Evangel", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = EmrakulsEvangel;
