const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-xs font-bold hover:bg-dark-300 border border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default ProjectTechnologiesMini;
