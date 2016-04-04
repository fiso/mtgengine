"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntotheVoidBase = require("../setAVR/IntotheVoid.js");

class IntotheVoid extends IntotheVoidBase {
  constructor(game) {
    super(game, "Into the Void", "Magic Origins", "ORI");
  }
}

module.exports = IntotheVoid;
