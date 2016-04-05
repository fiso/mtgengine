"use strict";
const Constants = require ("../../../Constants");
const IntotheVoidBase = require("../setAVR/IntotheVoid");

class IntotheVoid extends IntotheVoidBase {
  constructor(game) {
    super(game, "Into the Void", "Magic Origins", "ORI");
  }
}

module.exports = IntotheVoid;
