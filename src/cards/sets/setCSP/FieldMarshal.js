"use strict";
const Constants = require ("../../../Constants");
const FieldMarshalBase = require("../set10E/FieldMarshal");

class FieldMarshal extends FieldMarshalBase {
  constructor (game) {
    super(game, "Field Marshal", "Coldsnap", "CSP");
  }
}

module.exports = FieldMarshal;
