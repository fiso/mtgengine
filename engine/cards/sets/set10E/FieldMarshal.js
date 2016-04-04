"use strict";
const Constants = require ("../../../Constants");
const FieldMarshalBase = require("../setCSP/FieldMarshal");

class FieldMarshal extends FieldMarshalBase {
  constructor(game) {
    super(game, "Field Marshal", "Tenth Edition", "10E");
  }
}

module.exports = FieldMarshal;
