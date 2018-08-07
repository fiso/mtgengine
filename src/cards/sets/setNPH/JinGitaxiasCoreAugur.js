"use strict";
const Constants = require ("../../../Constants");
const JinGitaxiasCoreAugurBase = require("../setIMA/JinGitaxiasCoreAugur");

class JinGitaxiasCoreAugur extends JinGitaxiasCoreAugurBase {
  constructor (game) {
    super(game, "Jin-Gitaxias, Core Augur", "New Phyrexia", "NPH");
  }
}

module.exports = JinGitaxiasCoreAugur;
