"use strict";
const Constants = require ("../../../Constants");
const ChildofAlaraBase = require("../setCON/ChildofAlara");

class ChildofAlara extends ChildofAlaraBase {
  constructor(game) {
    super(game, "Child of Alara", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = ChildofAlara;
