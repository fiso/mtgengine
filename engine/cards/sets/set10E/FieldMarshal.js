"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieldMarshalBase = require("../setCSP/FieldMarshal.js");

class FieldMarshal extends FieldMarshalBase {
  constructor(game) {
    super(game, "Field Marshal", "Tenth Edition", "10E");
  }
}

module.exports = FieldMarshal;
