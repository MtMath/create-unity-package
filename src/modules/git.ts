import simpleGit, { SimpleGit } from "simple-git";

export const createRepo = async (path: string) => {
  const git: SimpleGit = simpleGit(path);
  await git.init();
  return git;
};
