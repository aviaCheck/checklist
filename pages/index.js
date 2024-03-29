import Head from "next/head";
import Image from "next/image";
import { Checkbox, Container, Title, Text, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

export default function Home() {
  const form = useForm({
    initialValues: {
      fuel: false,
      walkaround: false,
      flightTags: false,
      gpu: false,
      apu: false,
      power: false,
      fly: false,
    },

    validate: {
      fuel: (value) => (!value ? "Must be checklisted before flight" : null),
      walkaround: (value) =>
        !value ? "Must be checklisted before flight" : null,
      flightTags: (value) =>
        !value ? "Must be checklisted before flight" : null,
      gpu: (value) => (!value ? "Must be checklisted before flight" : null),
      apu: (value) => (!value ? "Must be checklisted before flight" : null),
      power: (value) => (!value ? "Must be checklisted before flight" : null),
      fly: (value) => (!value ? "Must be checklisted before flight" : null),
    },
  });

  function submitForm(values) {
    fetch("/api/submit", { method: "POST", body: JSON.stringify(values) });
    showNotification({
      title: "Checklist Submitted",
      color: "pink",
    });
  }
  return (
    <div>
      <Head>
        <title>Checklist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container pt={50}>
        <Title>Checklist for Bombardier Q300</Title>
        <Text>
          Checklist to be completed before takeoff on the Bombardier Q300.
        </Text>
        <form onSubmit={form.onSubmit(submitForm)}>
          <Checkbox
            color="pink"
            pt={30}
            label="Fuel airplane"
            {...form.getInputProps("fuel", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Do walkaround"
            {...form.getInputProps("walkaround", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Pull flight tags"
            {...form.getInputProps("flightTags", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Power on GPU"
            {...form.getInputProps("gpu", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Power on APU"
            {...form.getInputProps("apu", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Power on plane"
            {...form.getInputProps("power", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Checkbox
            color="pink"
            pt={8}
            label="Fly!"
            {...form.getInputProps("fly", {
              type: "checkbox",
              withError: true,
            })}
          />
          <Button type="submit" color="pink" mt={10}>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
