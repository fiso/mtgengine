"use strict";
const Constants = require ("../../../Constants");
const AgelessEntityBase = require("../setDDH/AgelessEntity");

class AgelessEntity extends AgelessEntityBase {
  constructor (game) {
    super(game, "Ageless Entity", "Darksteel", "DST");
  }
}

module.exports = AgelessEntity;
