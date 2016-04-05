"use strict";
const Constants = require ("../../../Constants");
const PreacherBase = require("../setMED/Preacher");

class Preacher extends PreacherBase {
  constructor(game) {
    super(game, "Preacher", "The Dark", "DRK");
  }
}

module.exports = Preacher;
