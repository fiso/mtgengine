"use strict";
const Constants = require ("../../../Constants");
const FieldofDreamsBase = require("../setPZ2/FieldofDreams");

class FieldofDreams extends FieldofDreamsBase {
  constructor (game) {
    super(game, "Field of Dreams", "Legends", "LEG");
  }
}

module.exports = FieldofDreams;
